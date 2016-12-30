import {compose, map, pluck} from 'ramda'
import {createElement} from 'react'
import {connect} from 'react-redux'
import ButtonPrimary from '../atoms/ButtonPrimary'
import {Cross, Plus} from '../atoms/ButtonIcons'
import {addChannel, removeChannel} from '../../actions'
import {makeClassName} from '../../utils/dom'

const mapStateToProps = ({
  nav: {lastDirection},
  plugins: {channels},
}) => ({
  channels,
  lastDirection,
})

export default connect(mapStateToProps)(({dispatch, channels, lastDirection}) =>
  createElement('div', {
    className: makeClassName(
      'Channels',
      lastDirection === 'left' ? 'slide-in-left' : 'slide-in-right'
    ),
  },
    map(
      channel => createElement('div', {key: channel},
        createElement(ButtonPrimary, {to: `/channel/${channel}`},
          `Channel ${channel}`
        ),
        createElement(Cross, {onClick: () => dispatch(removeChannel(channel))})
      ),
      pluck('name', channels)
    ),
    createElement('div', null,
      createElement(Plus, {onClick: compose(dispatch, addChannel)}, 'ADD NEW CHANNEL')
    )
  ))
