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
    const {
      imageStyle, containerStyle, iconContainerStyle, textStyle
    } = styles.leftColumnStyle;
    return (
      <View>
        <Image
          style={[imageStyle, containerStyle]}
          source={{ uri: avatar.uri }}
        />
        <Row>
          <Icon
            name="vk"
            type="font-awesome"
            size={24}
            containerStyle={iconContainerStyle}
          />
          <Text style={textStyle}>{vkLink}</Text>
        </Row>
        <Row>
          <Icon
            name="facebook"
            type="font-awesome"
            size={24}
            containerStyle={iconContainerStyle}
          />
          <Text style={textStyle}>{fbLink}</Text>
        </Row>
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
