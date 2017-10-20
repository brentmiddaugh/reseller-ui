import Application from './application';

export default Application.extend({
  urlForCreateRecord(modelName, snapshot) {
    const brandId = snapshot.record.brandId;
    return `/${this.namespace}/brands/${brandId}/components`;
  }
});
