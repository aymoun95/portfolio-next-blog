import firestore from '../../../lib/firebase';

export default async (req, res) => {
  if (req.method === 'POST') {
    const ref = firestore.collection('views').doc(req.query.slug);
    try {
      let newViewsCount = 0;
      await firestore.runTransaction(async (t) => {
        const doc = await t.get(ref);
        if (doc.exists) {
          const currentViews = doc.data().count;
          newViewsCount = currentViews + 1;
          t.update(ref, { count: newViewsCount });
        } else {
          newViewsCount++;
          t.create(ref, { count: newViewsCount });
        }
      });
      return res.status(200).json({
        total: newViewsCount
      });
    } catch (e) {
      return res.status(500).json({
        total: null
      });
    }
  }
  if (req.method === 'GET') {
    const doc = await firestore.collection('views').doc(req.query.slug).get();
    const viewsCount = doc.exists ? doc.data().count : 1;

    return res.status(200).json({ total: viewsCount });
  }
};
