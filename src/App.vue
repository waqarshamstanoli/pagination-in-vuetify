<template>
  <v-container>

        <v-card
      outlined
      max-width="300"
    
      v-for="(item, i ) in Pages"  :key="i"
    >
   
         <v-img width="100%" src="https://technoroll.org/wp-content/uploads/2020/12/Become-a-Full-Stack-Developers.jpg">
        
        </v-img>

    </v-card>

        <v-pagination
        v-model="page"
        :length="Math.ceil(this.array.length/perPage)"
        
      ></v-pagination>
  </v-container>
</template>
<script>

export default {
  data() {
    return {

         page: 1,
      perPage: 4,
      array:[
      'Card1',
      'Card2',
      'Card3',
      'Card4',
      'Card5',

      'Card6',
      'Card7',
      'Card8',
      'Card9',
      'Card10',

      ]
    };
  },

  computed: {
        Pages () {
      return this.array.slice((this.page - 1)* this.perPage, this.page* this.perPage)
    },
  },

};
</script>

<style scoped>
.v-pagination__item.v-pagination__item--active.primary{
color: turquoise !important;
}
</style>
