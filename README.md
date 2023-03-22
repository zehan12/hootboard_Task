# ⛅ Weather App
A simple weather app that allows you to get current weather information, based on the city you enter or based on your current location.

### DEMO: https://weather-app-zehan12.vercel.app/

## Screenshots
Page 1
[![page1.png](https://i.postimg.cc/bNXGjyk7/page1.png)](https://postimg.cc/0rf5Yqtn)

Page 2 
[![page2.png](https://i.postimg.cc/RCtFdkyX/page2.png)](https://postimg.cc/mhbB25bH)

### Flow
If the user enters the name of a city or clicks on "Get Device Location", they will be directed to the page displaying weather details.

### Technology Stack
* HTML5
* CSS3
* JavaScript (ES6+)
* ReactJS

## API
https://api.openweathermap.org/data/2.5/weather

## Development

To get a local copy of the code, clone it using git:

```
git clone https://github.com/zehan12/weather-app.git
cd weather-app
```

Install dependencies:

```
yarn
```

Now, you can start a local web server by running:

```
yarn run dev
```

And then open http://localhost:5173 to view it in the browser.

## Folder Structure
```
├── index.html
├── package.json
├── postcss.config.cjs
├── public
│   ├── images
│   │   ├── 01d.png
│   │   ├── 01n.png
│   │   ├── 02d.png
│   │   ├── 02n.png
│   │   ├── 03d.png
│   │   ├── 03n.png
│   │   ├── 04d.png
│   │   ├── 04n.png
│   │   ├── 09d.png
│   │   ├── 09n.png
│   │   ├── 10d.png
│   │   ├── 10n.png
│   │   ├── 11d.png
│   │   ├── 11n.png
│   │   ├── 13d.png
│   │   ├── 13n.png
│   │   ├── 50d.png
│   │   └── 50n.png
│   └── vite.svg
├── setupTest.js
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── __test__
│   │   └── App.test.jsx
│   ├── apis
│   │   └── weather.js
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── Skeleton.jsx
│   │   └── Toster.jsx
│   ├── constants
│   │   ├── key.js
│   │   └── urls.js
│   ├── errorboundary
│   │   └── ErrorBoundary.jsx
│   ├── hoc
│   │   └── withRouter.jsx
│   ├── hooks
│   │   └── usePostion.jsx
│   ├── index.css

│   ├── main.jsx
│   ├── pages
│   │   ├── Form.jsx
│   │   ├── NotFound.jsx
│   │   └── WeatherDetail.jsx
│   └── utils
│       └── helpers.js
├── tailwind.config.cjs
├── vite.config.js
└── yarn.lock
```

### Libraries and Dependencies

|      Library      | Description                                                              |
| :---------------: | :----------------------------------------------------------------------- |
|       React       | Utilize React to build out a well-designed front-end experience.         |
|   React Router    | Use React Router for client-side routing                                 |
|      Axios        | Use for fetch data from API                                              |
|  react-hot-toast  | Utilize Toaster to show notification of error and message                |
|  Tailwind CSS     | Utilize Tailwind to style all react components                           |
|  react-icons      | Use for showing icons                                                    |
| react-loading CSS | This is use for showing loading components at time of loading state      |

## Contributions
Any feature requests and pull requests are welcome!

## Show your support
Give a ⭐️ if this project helped you!

## License
The project is under MIT license.


