'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import renderer from 'react-test-renderer';
import UserProfile from '../src/components/UserProfile';
import ProfilePicture from '../src/components/ProfilePicture';
import FollowButton from '../src/components/FollowButton';
import { expect } from 'chai';
import { mount } from 'enzyme';

describe('User Profile', function () {

let result, renderer, instance;

  beforeEach(function () {
    renderer = ReactTestUtils.createRenderer();
    renderer.render(<UserProfile username='Homer' />);
    result = renderer.getRenderOutput();
    instance = mount(<UserProfile username='Homer' />);
  });

  describe('Profile Picture', function() {
    it('should include the component and pass username prop', function () {
      expect(result.type).to.equal('div');
      expect(result.props.children[0].type.displayName).to.equal('ProfilePicture');
      expect(result.props.children[0].props.username).to.equal('Homer');
    });

    it('should include the image', function () {
      expect(instance.find('img').length).to.equal(1);
      expect(instance.find('img').prop('src')).to.equal('assets/Homer.jpg');
    });
  });

  describe('Follow button', function () {
    it('should include the component and pass username prop', function () {
      expect(result.type).to.equal('div');
      expect(result.props.children[1].type.displayName).to.equal('FollowButton');
      expect(result.props.children[1].props.username).to.equal('Homer');
    });

    it('should toggle classname when clicked', function () {
      expect(instance.find('.follow').length).to.equal(1);
      expect(instance.find('.unfollow').length).to.equal(0);
      instance.find('p').simulate('click');
      expect(instance.find('.follow').length).to.equal(0);
      expect(instance.find('.unfollow').length).to.equal(1);
    });
  });

});
