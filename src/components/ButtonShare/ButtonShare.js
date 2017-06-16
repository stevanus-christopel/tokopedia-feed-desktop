import React, { Component } from 'react';
import './ButtonShare.css';
import getImage from '../../lib/utils.js';

var ButtonShare = React.createClass({
  getInitialState: function() {
    return {
      isShowPopover: false
    };
  },
  isPopoverShowed: function() {
    if(this.state.isShowPopover === true) {
      this.setState({ isShowPopover: false})
    }
  },
  shareFacebook: function() {
    var item = this.props.item;
  
    const shopName = item !== {} ? item.source.shop.name : ''
    const newShopName = shopName.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
    const name = item !== {} ? `Produk baru dari ${newShopName} di Tokopedia` : ''
    const urls = item !== {} ? item.source.shop.url : ''
    const picture = item !== {} ? item.source.shop.avatar : ''
    const shareurl = `${'https://www.facebook.com/sharer/sharer.php?u='}${encodeURIComponent(urls)}&title=${name}&picture=${encodeURIComponent(picture)}` 
    window.open(
        shareurl,
        '_blank', `
        scrollbars=yes, resizable=no, 
        toolbar=no, location=yes`,
    )
  },
  shareTwitter: function () {
    var item = this.props.item;
  
    const shopName = item !== {} ? item.source.shop.name : ''
    const newShopName = shopName.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
    const name = item !== {} ? `Produk baru dari ${newShopName} | Tokopedia` : ''
    const urls = item !== {} ? item.source.shop.url : ''
    const shareurl = `${'https://twitter.com/intent/tweet?url='}${encodeURIComponent(urls)}&text=${encodeURIComponent(name)}`
    window.open(
        shareurl,
        '_blank', `
        scrollbars=yes, resizable=no, 
        toolbar=no, location=yes`,
    )
  },
  shareGooglePlus: function () {
    var item = this.props.item;
    
    const name = item !== {} ? `Produk baru dari ${item.source.shop.name} | Tokopedia` : ''
    const urls = item !== {} ? item.source.shop.url : ''
    const url = `${'https://plus.google.com/share?url='}${encodeURIComponent(urls)}&title=${encodeURIComponent(name)}`
    window.open(
        url,
        '_blank', `
        scrollbars=yes, resizable=no, 
        toolbar=no, location=yes`,
    )
  },
  shareWhatsapp: function() {
    var item = this.props.item;
    
    const linkDescription = item !== {} ? item.source.shop.shareLinkDescription : ''
    const linkURL = item !== {} ? item.source.shop.shareLinkURL : ''
    const encodedLinkDes = linkDescription.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
    const newLinkDes = encodedLinkDes.replace(/&|%|#/g, '')
    const name = `${newLinkDes} ${linkURL}`
    window.open(`whatsapp://send?text=${name}`, '_self')
  },
  shareLine: function() {
    var item = this.props.item;

    const linkDescription = item !== {} ? item.source.shop.shareLinkDescription : ''
    const linkURL = item !== {} ? item.source.shop.shareLinkURL : ''
    const name = `${linkDescription} ${linkURL}`
    const shareurl = `${'http://line.me/R/msg/text/?'}${encodeURIComponent(name)}`
    window.open(
        shareurl,
        '_self', `
        scrollbars=yes, resizable=no, 
        toolbar=no, location=yes`,
    )
  },
  shareLink: function() {
    var item = this.props.item;
    // define your default ID, for example we use pattern [feedplus-container-]
    const selector = `feedplus-container-${item.id}`
    const linkDescription = item !== {} ? item.source.shop.shareLinkDescription : ''
    const linkURL = item !== {} ? item.source.shop.shareLinkURL : ''
    const name = `${linkDescription} ${linkURL}`
    const dummy = document.createElement('div')
    document.getElementById(selector).appendChild(dummy)
    dummy.setAttribute('id', 'dummyUrl')
    document.getElementById('dummyUrl').innerHTML = name

    if (document.selection) { 
      const range = document.body.createTextRange()
      range.moveToElementText(document.getElementById('dummyUrl'))
      range.select().createTextRange()
      document.execCommand("Copy")
    } else if (window.getSelection) {
      window.getSelection().removeAllRanges()
      const range = document.createRange()
      range.selectNode(document.getElementById('dummyUrl'))
      window.getSelection().addRange(range)
      document.execCommand("Copy")
    }
    document.getElementById(selector).removeChild(dummy)

		document.getElementsByClassName('button-share__toast-container')[0].classList.add('show')
		setTimeout(() => {
			document.getElementsByClassName('button-share__toast-container')[0].classList.remove('show')
		}, 2000)
  },
  render: function() {
    return (
      <div onMouseLeave={() => this.setState({isShowPopover: false})}>
				<div className='button-share__toast-container ta-center'>
					<div className='fs-12 inline-block'>Link telah disalin</div>
				</div>

        <button className='btn button-share' onClick={() => this.isPopoverShowed()} onMouseOver={() => this.setState({isShowPopover: true})}>
            <img className='button-share--icon' alt='' src={getImage('icon-btn-share.png')} /> Bagikan
        </button>
        {
          this.state.isShowPopover === true &&
          <div className='button-share__icon-container' >
            <img className='button-share--arrow' alt='' src={getImage('arrow-up.png')} />
            <img className='button-share--link' alt='' src={getImage('icon-fb.png')} onClick={ () => this.shareFacebook() } />
            <img className='button-share--link' alt='' src={getImage('icon-twitter.png')} onClick={ () => this.shareTwitter() } />
            <img className='button-share--link' alt='' src={getImage('icon-g.png')} onClick={ () => this.shareGooglePlus() } />
            <img className='button-share--link' alt='' src={getImage('icon-wa.png')} onClick={ () => this.shareWhatsapp() } />
            <img className='button-share--link' alt='' src={getImage('icon-line.png')} onClick={ () => this.shareLine() } />
            <img className='button-share--link' alt='' src={getImage('icon-link.png')} onClick={ () => this.shareLink() } />
          </div>
        }
      </div>
    );
  }
})

export default ButtonShare;