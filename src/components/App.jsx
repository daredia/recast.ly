class App extends React.Component {
  constructor(props) {
    super(props);

    // TODO: uncomment this out and get it to work
    // this.state = {
    //   videos: [],
    //   video: {}
    // };

    this.state = {
      videos: window.exampleVideoData,
      video: window.exampleVideoData[0]
    };
  }

  componentDidMount() {
    var options = {
      query: 'lebron',
      max: 5,
      key: window.YOUTUBE_API_KEY
    };
    
    this.props.searchYouTube(options, (data) => {
      this.setState({
        videos: data,
        video: data[0]
      });
    });
  }

  onVideoListEntryClick(event, props) {
    props.appInstance.setState({
      video: props.video
    });
    
  }

  onUserInput(event, props) {
    var options = {
      query: 'kobe',
      max: 5,
      key: window.YOUTUBE_API_KEY
    };

    props.appInstance.props.searchYouTube(options, (data) => {
      console.log('this', this);
      this.appInstance.setState({
        videos: data,
        video: data[0]
      });
    });

  }


  render() {
    return (
      <div>
        <Nav appInstance={this} onUserInput={this.onUserInput}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList appInstance={this} onClick={this.onVideoListEntryClick} videos={this.state.videos}/>
        </div>
      </div>
    ); 
  }

  

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;