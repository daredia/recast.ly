class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: window.exampleVideoData,
      video: window.exampleVideoData[0]
    };
  }

  onVideoListEntryClick(event, props) {
    props.appInstance.setState({
      video: props.video
    });
    
  }



  render() {
    return (
      <div>
        <Nav />
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