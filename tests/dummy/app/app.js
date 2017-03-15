import config from './config/environment'
import Ember from 'ember'
import Resolver from 'ember-engines/resolver'
import loadInitializers from 'ember/load-initializers'

const {Application} = Ember

let App

Ember.MODEL_FACTORY_INJECTIONS = true

App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  engines: {
    emberBlogEngine: {
      dependencies: {
        services: [
          'blog-data',
          {'session': 'active-session'}
        ]
      }
    }
  }
})

loadInitializers(App, config.modulePrefix)

export default App
