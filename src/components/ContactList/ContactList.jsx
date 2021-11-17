import ListElement from './ListElement';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

const ContactList = ({ contactsList }) => {
  return (
    <ul>
      {contactsList.map(({ id, name, number }) => {
        return (
          <ListElement
            key={id}
            name={name}
            number={number}
            deleteBtnNameAsId={id}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactsList: PropTypes.array.isRequired,
};

const filteredContactList = function (contacts, filterWord) {
  let result = [];
  result = contacts.filter(item => {
    return item.name.toLowerCase().includes(filterWord.toLowerCase());
  });
  console.log(contacts, filterWord, result);
  return result;
};

const mapStateToProps = state => {
  return {
    //state props for Filter:
    contactsList: filteredContactList(
      state.contacts.items,
      state.contacts.filter,
    ),
  };
};

export default connect(mapStateToProps, null)(ContactList);
