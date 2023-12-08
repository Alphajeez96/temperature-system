<template>
  <section class="holder">
    <div class="pin"></div>
    <div class="pulse"></div>
  </section>
</template>

<style scoped>
.holder {
  height: 100vh;
  background-color: #112330;
}
.pin {
  animation: pin 1.2s infinite;
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 50% 0;
  background: #312783;
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -20px 0 0 -20px;
}
.pin:after {
  content: '';
  width: 14px;
  height: 14px;
  margin: 8px 0 0 8px;
  background: #ffe388;
  position: absolute;
  border-radius: 50%;
  animation: pulsate 1s ease-out;
  animation-iteration-count: infinite;
}
.pulse {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: 14px;
  width: 14px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: 11px 0px 0px -12px;
  transform: rotateX(55deg);
}
.pulse:after {
  content: '';
  border-radius: 50%;
  height: 40px;
  width: 40px;
  position: absolute;
  margin: -13px 0 0 -13px;
  animation: pulsate 1s ease-out;
  animation-iteration-count: infinite;
  opacity: 0;
  box-shadow: 0 0 1px 2px #312783;
}

@keyframes pulsate {
  from {
    transform: scale(0.1, 0.1);
    opacity: 0;
  }
  to {
    transform: scale(1.2, 1.2);
    opacity: 1;
  }
}

@keyframes pin {
  100% {
    top: 45%;
    bottom: 60px;
  }
}
</style>
