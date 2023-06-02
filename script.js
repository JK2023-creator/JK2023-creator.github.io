// script.js

// 라우팅 설정
page('/', showHome)
page('/about', showAbout)
page('/portfolio', showPortfolio)
page('/Story Book', showStoryBook)
page('/sns', showSNS)

// 페이지 이동시 해당 함수를 호출하도록 설정
page()

window.addEventListener('scroll', function () {
  // 스크롤 이벤트가 발생할 때마다 실행될 코드를 작성합니다.
  // 예시로 console.log를 사용하여 스크롤 이벤트를 확인합니다.
  console.log('스크롤 이벤트 발생')
})

// Home 페이지
function showHome() {
  // Home 페이지를 보여주는 로직을 작성합니다.
  console.log('Home 페이지')

  // 유튜브 동영상을 재생하는 함수
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: '7zT8IQUXAkw',
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    })
  }

  // 미니 동영상 클릭 이벤트 처리
  var videoCards = document.getElementsByClassName('video-card')
  for (var i = 0; i < videoCards.length; i++) {
    videoCards[i].addEventListener('click', function () {
      var videoId = this.getAttribute('data-video-id')
      playYoutubeVideo(videoId)
    })
  }
}

// About 페이지
function showAbout() {
  // About 페이지를 보여주는 로직을 작성합니다.
  console.log('About 페이지')
}

// Portfolio 페이지
function showPortfolio() {
  // Portfolio 페이지를 보여주는 로직을 작성합니다.
  console.log('Portfolio 페이지')
}

// Story Book 페이지
function showStoryBook() {
  // Story Book 페이지를 보여주는 로직을 작성합니다.
  console.log('Story Book 페이지')
}

// SNS 페이지
function showSNS() {
  // SNS 페이지를 보여주는 로직을 작성합니다.
  console.log('SNS 페이지')
}
