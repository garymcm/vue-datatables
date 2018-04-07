# vue-datatables - a simple example of Vue cooperating JQuery and [Datatables](https://datatables.net).

In the situation where Datatable is built from an HTML Table, which in turn comes from eg., a Vue ```v-for```. Since Vue likes to control updates to the DOM, this example makes use of $nextTick to allow Datatables to play nice.

# Installation

After cloning
```
$ npm run serve
```
