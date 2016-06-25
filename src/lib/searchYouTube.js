var searchYouTube = (options, callback) => {
  // use jquery GET to search endpoint

  var url = 'https://www.googleapis.com/youtube/v3/search';

  $.ajax({
    url: url,
    type: 'GET',
    data: {
      type: 'video',
      part: 'snippet',
      q: options.query, 
      maxResults: options.max, 
      key: options.key,
      format: 5
    },
    contentType: 'application/JSON',
    success: (data) => {
      callback(data.items);
    },
    error: () => {
      console.log('error on fetch');
    }
  }).done(() => {
  });
};

window.searchYouTube = searchYouTube;
