import { List } from './ReviewsList.styled';
import { ReviewItem } from 'components/ReviewItem/ReviewItem';

export function ReviewsList({ reviews }) {
  return (
    <List>
      {reviews.map(review => {
        return <ReviewItem review={review} key={review.id} />;
      })}
    </List>
  );
}
