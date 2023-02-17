import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import gotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';
import App from '../../app'

export default class BooksPage extends Component {
  gotService = new gotService();

  state = {
    selectedBook: null,
    error: false
  }

  onItemSelected = (id) => {
    this.setState({
      selectedBook: id
    })
  }

  componentDidCatch () {
    this.setState({
      error: true
    })
  }


  render () {

    if (this.state.error) {
      return <ErrorMessage/>
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        renderItem={({name}) => name}
      />
    )

    const itemDetails = (
      <ItemDetails
        itemId={this.state.selectedBook}
        getData={this.gotService.getAllBooks}>
        <Field field='numberOfPages' label='NumberOfPages' />
        <Field field='publisher' label='Publisher' />
        <Field field='released' label='Released' />
      </ItemDetails>
    )

    return (
      <>
        <App />
        <RowBlock left={itemList} right={itemDetails}/>
      </>
    )
  }
}