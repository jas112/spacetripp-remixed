if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/spacetripp/service-worker.js', { scope: '/spacetripp/' })})}