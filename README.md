# vue-datatables - a simple example of Vue cooperating the JQuery and Datatables.

In the situation where [Datatables](https://datatables.net) is built from an HTML Table, which in turn comes from a Vue ```v-for```. Since Vue likes to control updates to the DOM, this example makes use of $nextTick to allow Datatables to play nice.

# Installation

After cloning
```
$ npm run serve
```
