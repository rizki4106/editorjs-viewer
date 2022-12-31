// load default configuration
import {configuration} from './lib/default'

// 
import Parser from './src/parser'

const parser = new Parser(configuration)

export {parser}