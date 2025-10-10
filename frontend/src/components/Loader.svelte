<div class="loader">
  <div class="dot-container dot-1">
    <span class="dot"></span>
  </div>
  <div class="dot-container dot-2">
    <span class="dot"></span>
  </div>
  <div class="dot-container dot-3">
    <span class="dot"></span>
  </div>

  <div class="dot-container dot-4">
    <span class="dot"></span>
  </div>
  <div class="dot-container dot-5">
    <span class="dot"></span>
  </div>
  <div class="dot-container dot-6">
    <span class="dot"></span>
  </div>
  <div class="dot-container dot-7">
    <span class="dot"></span>
  </div>
  <div class="dot-container dot-8">
    <span class="dot"></span>
  </div>
</div>

<style>
  .loader {
    position: relative;
    width: 50px;
    height: 50px;
    margin: 10em auto;
  }

  .dot-container {
    position: absolute;
    width: 100%;
    height: 50%;
    left: 0;
    top: 0;
    transform-origin: 50% 100%;
  }

  .dot {
    display: block;
    width: 10px;
    height: 10px;
    background: var(--blue-color);
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: calc(50% - 7.5px);
    animation: fade 2s linear infinite;
  }

  .dot-1 {
    transform: rotate(0deg);
  }
  .dot-1 .dot {
    animation-delay: -2s;
  }

  .dot-2 {
    transform: rotate(45deg);
  }
  .dot-2 .dot {
    animation-delay: -1.75s;
  }

  .dot-3 {
    transform: rotate(90deg);
  }
  .dot-3 .dot {
    animation-delay: -1.5s;
  }

  .dot-4 {
    transform: rotate(135deg);
  }
  .dot-4 .dot {
    animation-delay: -1.25s;
  }

  .dot-5 {
    transform: rotate(180deg);
  }
  .dot-5 .dot {
    animation-delay: -1s;
  }

  .dot-6 {
    transform: rotate(225deg);
  }
  .dot-6 .dot {
    animation-delay: -0.75s;
  }

  .dot-7 {
    transform: rotate(270deg);
  }
  .dot-7 .dot {
    animation-delay: -0.5s;
  }

  .dot-8 {
    transform: rotate(315deg);
  }
  .dot-8 .dot {
    animation-delay: -0.25s;
  }

  @keyframes fade {
    0%,
    100% {
      opacity: 0.2;
    }
    12.5% {
      opacity: 1;
    }
    25% {
      opacity: 0.2;
    }
  }
</style>
