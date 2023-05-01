import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Header, Input, Button } from './SearchbarStyle';

export default function SearchForm({ onSubmit }) {
  const [inputQuery, setInputQuery] = useState('')

  const handleQueryChange = event => {
    setInputQuery(event.target.value.toLowerCase())
  }

  const handleSubmit = event => {
    event.preventDefault();

    if (inputQuery.trim() === '') {
      return toast.error('Please, type something...');
    }

    onSubmit(inputQuery);
    setInputQuery('');
  };

  return (
     <Header>
        <form
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          <Button type="submit">
          </Button>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleQueryChange}
            value={inputQuery}
          />
        </form>
      </Header>
  )
}

// export default class SearchForm extends Component {
//   state = {
//     inputQuery: '',
//   };

//   handleQueryChange = event => {
//     this.setState({ inputQuery: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     if (this.state.inputQuery.trim() === '') {
//       return toast.error('Please, type something...');
//     }

//     const { inputQuery } = this.state;
//     inputQuery.toLowerCase().trim();
//     this.props.onSubmit(inputQuery);
//   };

//   render() {
//     const { inputQuery } = this.state;
//     return (
      // <Header>
      //   <form
      //     onSubmit={e => {
      //       this.handleSubmit(e);
      //     }}
      //   >
      //     <Button type="submit">
      //     </Button>
      //     <Input
      //       type="text"
      //       autoComplete="off"
      //       autoFocus
      //       placeholder="Search images and photos"
      //       onChange={this.handleQueryChange}
      //       value={inputQuery}
      //     />
      //   </form>
      // </Header>
//     );
//   }
// }

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
