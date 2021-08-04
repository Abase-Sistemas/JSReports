/*
 * jsreports 1.4.122
 * Copyright (c) 2017 jsreports
 * http://jsreports.com
 */
/**
 * Combine ditto-core and ditto-designer into one module
 */
import ditto from './index-core';
import Designer from './index-designer';
Designer(ditto);

module.exports = ditto;
