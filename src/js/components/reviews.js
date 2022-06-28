export const reviewsSpoilers = () => {
  document.querySelectorAll('.reviews__item-text').forEach((review) => {
    if (review.offsetHeight > 200) {
      // WAT?
    }
  });
};

export const reviewsFilterUtils = () => {
  // On the afterFilter event, or whatever event happens to resize your container
  UIkit.util.on('[uk-filter]', 'afterFilter', () => {
    // Reinit the sticky component since the parent container height resizes
    UIkit.sticky('.page-content__sidebar-sticky[uk-sticky]', {
      bottom: true,
    });
  });
};
