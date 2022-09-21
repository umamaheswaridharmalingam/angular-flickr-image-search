import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpContentType, PhotosRootModel } from '../model';
import { BaseRestApiService } from './_base-rest-api.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService extends BaseRestApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  public searchImage(
    searchText: string,
    imagesPerPage: number,
    pageNumber: number,
    orientation: string,
    searchInText: boolean = true,
    fromDate: Date,
    toDate: Date,
    imageContentTypes: string,
    colorCode?: number,
    dimensionMode?: number
  ): Observable<PhotosRootModel> {
    let urlParam: any = {};
    urlParam.method = 'flickr.photos.search';
    urlParam.api_key = '765e226bdf8b18e3f561b28dc1a48f87';

    if (searchInText) {
      urlParam.text = searchText;
    } else {
      urlParam.tags = searchText;
    }

    urlParam.format = 'json';

    urlParam.nojsoncallback = 1;
    urlParam.per_page = imagesPerPage;
    urlParam.page = pageNumber;

    if (orientation) {
      urlParam.orientation = orientation;
    }

    if (fromDate) {
      urlParam.min_taken_date = new Date(fromDate).getTime() / 1000;
    }

    if (toDate) {
      urlParam.max_taken_date = new Date(toDate).getTime() / 1000;
    }

    if (imageContentTypes) {
      urlParam.content_types = imageContentTypes;
    }

    if (dimensionMode) {
      urlParam.dimension_search_mode = dimensionMode;
    }
    // if(colorCode) {
    //   urlParam.color_codes = colorCode;
    // }

    urlParam.sort = 'relevance';
    urlParam.parse_tags = 1;
    urlParam.content_type = 7;
    return this.get<PhotosRootModel>(
      `${environment.flickerApiUrl}`,
      urlParam,
      null,
      HttpContentType.text
    );
  }
}
