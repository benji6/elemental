import React from 'react'
import {Router, Route} from 'react-router'
import ChannelsView from './components/pages/ChannelsView'
import KeyboardSettings from './components/pages/KeyboardSettings'
import ChannelView from './components/pages/ChannelView'
import ControlPadSettings from './components/pages/ControlPadSettings'
import ControlPadView from './components/pages/ControlPadView'
import PatternEditorSettings from './components/pages/PatternEditorSettings'
import PatternEditorView from './components/pages/PatternEditorView'
import SettingsView from './components/pages/SettingsView'

export default <Router>
  <Route path="/channel/:channelId" component={ChannelView} />
  <Route path="/channels" component={ChannelsView} />
  <Route path="/control-pad" component={ControlPadView} />
  <Route path="/control-pad/settings" component={ControlPadSettings} />
  <Route path="/keyboard/settings" component={KeyboardSettings} />
  <Route path="/pattern-editor" component={PatternEditorView} />
  <Route path="/pattern-editor/settings" component={PatternEditorSettings} />
  <Route path="/settings" component={SettingsView} />
  <Route path="/*" component={ControlPadView}/>
</Router>
