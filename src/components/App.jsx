class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      video: null
    };

    
  }

  componentDidMount() {
    var options = {
      query: '',
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
    console.log('event:', event);
    var options = {
      query: event.target.value,
      max: 5,
      key: window.YOUTUBE_API_KEY
    };

    var searchDebounced = _.debounce(
      props.appInstance.props.searchYouTube, 
      500
    );


    searchDebounced(options, (data) => {
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