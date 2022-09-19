const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel",
          phone: "123456",
          email: "blablabla@gmail.com",
        },
        {
          id: "liza",
          name: "liza",
          phone: "7891011",
          email: "liza@gmail.com",
        },
      ],
    };
  },
});

app.component("user-contact", {
  template: `
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetailsVisible">
            {{detailsVisible ? 'Hide' : 'Show'}} Details
          </button>
          <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
     `,
  props: {
    friend: {
      type: Object,
    },
  },
  data() {
    return {
      detailsVisible: false,
    };
  },
  methods: {
    toggleDetailsVisible() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});

app.mount("#app");
