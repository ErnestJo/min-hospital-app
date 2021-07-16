/*
    Require modules
*/
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
var {mongoose} = require('./server/db/mongoose.js');