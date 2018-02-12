import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';
import Row from '../../components/common/Row';

class LeftColumn extends Component {
  static defaultProps = {
    avatar: {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Volleyball_dig_02.jpg'
    },
    vkLink: 'www.vk.com/melnik.mellow',
    fbLink: 'www.facebook.com/melnik.mellow'
  }
  static propTypes = {
    avatar: PropTypes.object,
    vkLink: PropTypes.string,
    fbLink: PropTypes.string
  }
  render() {
    const { avatar, vkLink, fbLink } = this.props;
    const { imageStyle, textStyle, linksContainerStyle } = styles.leftColumnStyle;
    return (
      <View>
        <Image
          style={imageStyle}
          source={{ uri: avatar.uri }}
        />
        <View style={linksContainerStyle}>
          <Row extraStyles={{ alignItems: 'center' }}>
            <Icon
              name="facebook"
              type="font-awesome"
              reverse
              color="#415fa8"
              size={16}
            />
            <Text style={textStyle}>{fbLink}</Text>
          </Row>
          <Row extraStyles={{ alignItems: 'center' }}>
            <Icon
              name="vk"
              type="font-awesome"
              reverse
              color="#0077d9"
              size={16}
            />
            <Text style={textStyle}>{vkLink}</Text>
          </Row>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  avatar: state.profile.avatar,
  vkLink: state.profile.vkLink,
  fbLink: state.profile.fbLink
});

export default connect(mapStateToProps)(LeftColumn);
