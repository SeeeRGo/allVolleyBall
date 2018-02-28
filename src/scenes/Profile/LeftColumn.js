import React, { Component } from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import styles, { socialNetworkColors } from './styles';
import Row from '../../components/common/Row';

class LeftColumn extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }
  render() {
    const { user } = this.props;
    const { imageStyle, textStyle, linksContainerStyle } = styles.leftColumnStyle;
    return (
      <View>
        {
          get(user, 'photo.link') &&
          (
            <Image
              style={imageStyle}
              source={{ uri: user.photo.link }}
            />
          )
        }
        <View style={linksContainerStyle}>
          {
            user.socialNetworks.map((sn) => {
              const provider = get(sn, 'data.provider');
              console.log(provider);
              return (
                <Row key={sn.id} extraStyles={{ alignItems: 'center' }}>
                  <Icon
                    name={provider === 'vkontakte' ? 'vk' : provider}
                    type="font-awesome"
                    reverse
                    color={socialNetworkColors[provider]}
                    size={16}
                  />
                  <Text style={textStyle}>{get(sn, 'data.profileUrl')}</Text>
                </Row>
              );
            })
          }
        </View>
      </View>
    );
  }
}

export default LeftColumn;
