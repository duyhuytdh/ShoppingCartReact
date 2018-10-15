import React from 'react';

const Header = () => {

  return(
    <div>
        <img style={styles.ImageStyle} src={require(`../static/banner.jpg`)}/>
    </div>
  )
}

const styles = {
    ImageStyle:{
      height:360
    }    
}

export default Header;