<template>
    <div class="mom">   
        <img class="avatar" src="/Avatar.jpg" alt="нет фото">
        <div class="rar">
  <div class="ils">
    Екатерина
    </div>
  <div class="ils">
    Хромова
  </div>
  <div class="ils">
   toptyann@yandex.ru
  </div>   
  <div class="ils">
    89250015158
    </div>
    <div class="ils">
    Подольск
    </div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.ils {
  width: 50%;
  background-color: rgb(160, 171, 192);
  border-radius: 15px;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 25px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

  
  caret-color: transparent;
}
.avatar {
    height: 300px;
    border-radius: 70px;
}

.mom{
  min-height: 80vh;
  margin-top: 100px;
    display: flex;
    justify-content: center;
    gap: 40px;
}

.rar{
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: start;
    gap: 40px;
    
    
}
</style>