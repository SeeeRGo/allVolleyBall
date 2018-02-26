import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';

import { getFilesByOwner } from '../../actions/files';
import styles from './styles';
import Row from '../../components/common/Row';

class LeftColumn extends Component {
  static defaultProps = {
    avatar: {
      uri: 'http://archive.2030palette.org/addons/shared_addons/themes/palette_2030/img/swatch_editor/image_placeholder.jpg'
    },
    vkLink: 'www.vk.com/melnik.mellow',
    fbLink: 'www.facebook.com/melnik.mellow'
  }
  static propTypes = {
    avatar: PropTypes.object,
    vkLink: PropTypes.string,
    fbLink: PropTypes.string
  }
  componentWillMount() {
    this.props.getFilesByOwner('profile', this.props.userId);
  }
  render() {
    const { avatar, vkLink, fbLink } = this.props;
    const { imageStyle, textStyle, linksContainerStyle } = styles.leftColumnStyle;
    return (
      <View>
        <Image
          style={imageStyle}
          source={avatar}
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

const mapStateToProps = (state) => {
  const avatar = state.files.find((file) => file.profileId === state.user.userId);
  return {
    avatar: {
      uri: avatar ? `http://10.0.3.2:3010${avatar.link}` : 'http://archive.2030palette.org/addons/shared_addons/themes/palette_2030/img/swatch_editor/image_placeholder.jpg'
    },
    vkLink: state.profile.vkLink,
    fbLink: state.profile.fbLink,
    userId: state.user.userId
  };
};

export default connect(mapStateToProps, { getFilesByOwner })(LeftColumn);
