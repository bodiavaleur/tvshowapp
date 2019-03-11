import React, { Component } from 'react';
import { Header, HeaderWrapper } from '../../ui/organisms';
import { MenuButton } from '../atoms';
import { connect } from 'react-redux';
import { toggleTopMenu } from '../../redux/uiActionsCreators';
import { Transition } from 'react-spring/renderprops';
import { BackgroundDark } from '../../ui/atoms';
import { Navbar } from '../molecules';

class TopMenu extends Component {
  toggleTopMenu() {
    return this.props.dispatch(toggleTopMenu());
  }

  render() {
    const isTopMenuOpen = this.props.isTopMenuOpen;
    return (
      <HeaderWrapper>
        <MenuButton
          onClick={() => this.toggleTopMenu()}
          menuIsOpen={this.props.isTopMenuOpen}
        />
        <Transition
          items={isTopMenuOpen}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0, position: 'absolute', height: 0 }}>
          {isTopMenuOpen =>
            isTopMenuOpen &&
            (props => (
              <React.Fragment>
                <Header style={props}>
                  <Navbar />
                </Header>
                <BackgroundDark style={props} />
              </React.Fragment>
            ))
          }
        </Transition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => ({
  isTopMenuOpen: state.uiReducer.isTopMenuOpen
});

export default connect(mapStateToProps)(TopMenu);
