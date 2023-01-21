import React from 'react';
import PropTypes from 'prop-types';
import NoteList from '../component/NoteList';
import SearchNote from '../component/SearchNote';
import { useSearchParams } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { getActiveNotes } from '../utils/api';
import LocaleContext from '../contexts/LocaleContext';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [searchTitle, setSearchTitle] = React.useState(() => {
    return searchParams.get('searchTitle') || '';
  });

  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  function onSearchHandler(searchTitle) {
    setSearchTitle(searchTitle);
    setSearchParams({ searchTitle });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(searchTitle.toLowerCase());
  });

  return (
    <section className="homepage">
      <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
      <SearchNote searchTitle={searchTitle} onTitleChange={onSearchHandler} />
      <NoteList notes={filteredNotes} />
      <div className="homepage__action">
        <Link to="/addnote" className="action">
          <BsPlusLg />
        </Link>
      </div>
    </section>
  );
}

HomePage.propTypes = {
  titleChange: PropTypes.func.isRequired,
  defaultTitle: PropTypes.string.isRequired,
};

export default HomePage;
