import React from 'react';

export default class Gads extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-2147271038808510'
          data-ad-slot='5437714785'
          data-ad-format='auto' 
          data-full-width-responsive="true"/>
    );
  }
}


