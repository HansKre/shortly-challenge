import { Controls } from './Controls';
import { Container } from './Container';
import { Input } from './Input';
import { ButtonSecondary, Layout } from 'components';
import React, { useEffect, useState } from 'react';
import {
  LOCAL_STORAGE_KEY,
  SHRTCODE_API_BASE,
  URL_REGEX,
} from '@root/constants';
import theme from '@styles/theme';
import { ShortenedUrls } from './shortened-urls';
import { LocalStorage } from 'types';

export default function Shortener() {
  const [url, setUrl] = useState('');
  const [urls, setUrls] = useState<LocalStorage>({});

  useEffect(() => {
    const fromLocalStorage = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (fromLocalStorage) {
      const shortenedUrls = JSON.parse(fromLocalStorage);
      setUrls(shortenedUrls);
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.currentTarget.value);
  }

  function handleClick() {
    // TODO: visualize validation below input-component
    if (!url) {
      alert('Please add a link');
      return;
    }
    var urlRegex = new RegExp(URL_REGEX);
    if (urlRegex.test(url)) {
      if (urls.hasOwnProperty(url)) {
        alert('Already shortened');
        return;
      }
      fetch(`${SHRTCODE_API_BASE}/shorten?url=${url}`)
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);
          return res.json();
        })
        .then((res) => {
          if (res.ok) {
            setUrls({ ...urls, [url]: { short: res.result.full_short_link } }),
              window.localStorage.setItem('shortly', JSON.stringify(urls));
          } else {
            console.log(res);
            alert('Something went wrong');
          }
        });
    } else {
      alert('Not a valid url');
    }
  }

  return (
    <Layout
      id='shortener'
      bgColor={theme.palette.neutral.sectionBackground}
      paddingTop='0'
    >
      <Controls id='shortener_controls'>
        <Container>
          <Input
            value={url}
            onChange={handleChange}
            placeholder='Shorten a link here...'
          />
          <ButtonSecondary onClick={handleClick}>Shorten It!</ButtonSecondary>
        </Container>
      </Controls>
      <ShortenedUrls urls={urls} />
    </Layout>
  );
}
