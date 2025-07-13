import firestore from '../../../lib/firebase';

export default async function handler(_, res) {
  const views = await firestore.collection('views').get();
  let allViews = 0;
  views.forEach((doc) => {
    allViews += doc.data().count;
  });

  return res.status(200).json({ total: allViews });
}
