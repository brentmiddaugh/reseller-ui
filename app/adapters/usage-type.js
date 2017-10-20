import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForCreateRecord(modelName, snapshot) {
    const brandId = snapshot.record.brandId;
    return `/${this.namespace}/brands/${brandId}/usage_types`;
  }
});
