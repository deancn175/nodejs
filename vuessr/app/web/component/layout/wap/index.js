import Vue from 'vue';
import MainLayout from './main.vue';
import createLayout from '../layout';
export default createLayout('Layout', { MainLayout }, '<div id="app"><MainLayout><div class="page-content" slot="main"><slot></slot></div></MainLayout></div>');
