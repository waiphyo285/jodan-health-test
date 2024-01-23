import { INetworkAdapter } from '@/models/services';
import { isArray, isObject } from '@/utilities/Helpers';
import { storeKeys } from '@/utilities/constants/storeKeys';
import { queryType } from '@/utilities/constants/application';
import { ObjectConverter, StringConverter } from './Builder';

class NetworkAdapter implements INetworkAdapter {
  query: any;
  params: any;
  reqData: any;
  resData: any;
  options: any;

  constructor(_body) {
    this.query = _body.query || {};
    this.reqData = _body.reqData || {};
    this.resData = _body.resData || {};
    this.options = _body.options || {};
  }

  createQuery(): void {}
  createRequest(): void {}
  createResponse(): void {}
}

export class QueryAdapter extends NetworkAdapter {
  constructor(_body) {
    super(_body);
  }

  createQuery() {
    const origin = this.query;
    const options = this.options;

    switch (options.type) {
      case queryType.PAGINATION:
        let searchInfo = {};
        let pageInfo = {
          skip: origin.page,
          take: origin.pageSize
        };

        if (origin.searchKey && origin.searchValue) {
          searchInfo = new ObjectConverter(searchInfo)
            .addProperty('key', origin.searchKey)
            .addProperty('value', origin.searchValue)
            .finish();
        }

        return {
          page: pageInfo,
          search: searchInfo
        };

      default:
        return origin;
    }
  }
}

export class RequestAdapter extends NetworkAdapter {
  constructor(_body) {
    super(_body);
  }

  createRequest() {
    const origin = this.reqData;
    const options = this.options;

    console.info('⇌ Adapter request ', options.apiName, origin);

    switch (options.apiName) {
      case storeKeys.USER_ROLE:
        const newLevel = new StringConverter(origin.level).toNumber().finish();

        return new ObjectConverter(origin)
          .addProperty('level', newLevel)
          .finish();

      case storeKeys.USER:
        if (options.url.includes('change-password')) {
          return new ObjectConverter({})
            .addProperty('id', origin.id)
            .addProperty('username', origin.username)
            .addProperty('password', origin.password)
            .addProperty('new_password', origin.new_password)
            .finish();
        }

        return new ObjectConverter(origin)
          .removeProperty('re_password')
          .removeProperty('user_role')
          .finish();

      case storeKeys.RECORD:
        return new ObjectConverter(origin).removeProperty('language').finish();

      default:
        return origin;
    }
  }
}

export class ResponseAdapter extends NetworkAdapter {
  constructor(_body) {
    super(_body);
  }

  serialize(apiName: string, data: any) {
    switch (apiName) {
      case storeKeys.USER:
        return new ObjectConverter(data).removeProperty('password').finish();

      case storeKeys.RECORD:
        return new ObjectConverter(data)
          .addProperty('language', data.language.name || '')
          .finish();

      default:
        return data;
    }
  }

  createResponse() {
    const origin = this.resData;
    const options = this.options;

    console.info('⇌ Adapter response ', options.apiName, origin);

    switch (true) {
      case isObject(origin):
        return this.serialize(options.apiName, origin);

      case isArray(origin):
        return origin.map((obj: any) => this.serialize(options.apiName, obj));

      default:
        return origin;
    }
  }

  createPageResponse() {
    const origin = this.resData;
    const options = this.options;

    console.log('reach page res ', origin, options);

    if (isArray(origin.data)) {
      const { data, pageInfo } = origin;

      console.warn('reach page res array 1 ', {
        ...origin,
        data: data
      });

      const modifiedData = data.map((obj: any, index: number) => {
        return {
          ...this.serialize(options.apiName, obj),
          no: pageInfo.page * pageInfo.pageSize + index + 1
        };
      });

      console.warn('reach page res array 2 ', {
        ...origin,
        data: modifiedData
      });

      return {
        ...origin,
        data: modifiedData
      };
    }

    return origin;
  }
}
