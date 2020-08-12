import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { Administrador } from '../../shared/models/administrador';
import { AdministradorService } from '../../core/services/administrador.service';

/**
 * Data source for the ProductRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class AdministradorReadDataSource extends DataSource<Administrador> {
  
  data = new BehaviorSubject<Administrador[]>([]);
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private administradorService: AdministradorService) {
    super();
    this.administradorService.getAdministradores({
      nome:  '',
      pagina: 0,
      itemsPorPagina: 10
    }
    ).subscribe(administrador => {
      console.log(administrador)
      this.data.next(administrador.body);
    })
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Administrador[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    if (this.paginator === undefined || this.sort === undefined) {
      return this.data.asObservable();
    }

    const dataMutations = [
      this.data.asObservable(),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data.value]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Administrador[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Administrador[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nome': return compareIgnoreCase(a.nome, b.nome, isAsc);
        case 'username': return compareIgnoreCase(a.username, b.username, isAsc);
        case 'ativo': return compare(+a.enabled, +b.enabled, isAsc);
        default: return 0;
      }
    });
  }

  public deleteAdministrador(id : number) {
    this.data.next(this.data.value.filter(adm => adm.id !== id));
  }

}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compareIgnoreCase(a : String, b : String, isAsc) {
  return (a.toUpperCase < b.toUpperCase ? -1 : 1) * (isAsc ? 1 : -1);
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
