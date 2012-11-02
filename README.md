# Caress Client#

*Caress Client* is a JavaScript library that converts [TUIO](http://www.tuio.org) events to native browser touches as proposed by the [W3C Touch Events version 2](http://dvcs.w3.org/hg/webevents/raw-file/tip/touchevents.html).

### Background ###
Thus far touch events have mainly only been supported on some mobile browsers. Firefox (as of version 4) is an exception in the desktop department and supports a mode where you can enable touch support (however it is a bit of a secret). Chrome's emulation of touch support, frankly just doesn't work.

For most of us this doesn't really cut it. I want multi-touch support on my desktop dammit! And across all browsers! This is what the aim of this library is. Using Caress Client + [Caress Server](https://github.com/ekryski/caress-server/) + some hardware that spits out TUIO, you too can have multi-touch support in your browser!

## Getting Started

### Client
You need to include a few client side libraries in your html file. They are:

    <script type="text/javascript" src="jquery-1.8.1.min.js"></script>
    <script type="text/javascript" src="underscore-1.3.3.min.js"></script>
    <script type="text/javascript" src="socket.io-0.9.10.min.js"></script>
    <script type="text/javascript" src="caress-0.1.0.js"></script>

*I'm planning on trying to get rid of the dependency on underscore*

### Server
Grab the [Caress Server](https://github.com/ekryski/caress-server/) and follow the instructions on the README.

## Examples
_See the [examples](https://github.com/ekryski/Caress/tree/master/examples) folder_

## Contributing
I am open to pull requests but make sure you include unit tests with your code.

## Credits
Although I did not collaborate with these individuals their work inspired me to create this project:

* Boris Smus (https://github.com/borismus/MagicTouch)
* Fajran Iman Rusadi (https://github.com/fajran/npTuioClient)
* Andy Smith (https://github.com/termie/node-osc)
* fe9lix (https://github.com/fe9lix/Tuio.js)
* Esteban Ginez (https://github.com/eginez/MultitouchWebSockets)

## MIT Licensed
Copyright 2012 Eric Kryski

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.