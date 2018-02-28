export class SNService {
  getInitialURL(url) {
    if (!url) {
      return;
    }
    this.handleOpenURL({ url });
  }

  handleOpenURL({ url }) {
    const [, userString] = url.match(/response=([^#]+)/);
    const response = JSON.parse(decodeURI(userString));
    this.props.loginBySocialNetwork(response);
  }
}

export default new SNService();
