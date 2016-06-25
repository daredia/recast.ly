var VideoListEntry = (props) => {

  // create another intermediate function handleClick
  // that function will invoke the app's click handler and pass the event and props
  // need to explicitly pass the event in addition to props
  // 
  // on the div, onClick = handleClick
  // 
  // another option is to use .call(this, props) on the div

  var handleClick = (event) => {
    props.onClick(event, props);
  };


  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={handleClick}>{props.video.snippet.title}</div>
        <div className="video-list-entry-detail">{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
