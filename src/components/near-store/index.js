Component({
  props: {
    className: 'store-ls',
    title:"Cửa hàng gần bạn",
    isLoading: true,
    banners: [],
    onTapBanner: () => {},
  },

  methods: {
    _onTapBanner(event) {
      const { item } = event.target.dataset;
      this.props.onTapBanner(item);
    },
  },
});
