<template>
 <div id="app">
    <Navbar/>
    <div class="conainer">
      <router-view/>
    </div>
    <Footer/>
 </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Footer from './components/Footer'
  export default {
    name: 'app',
    components:{
      Navbar,
      Footer
    }
  }
</script>
