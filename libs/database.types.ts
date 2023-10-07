export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      ColorTypes: {
        Row: {
          created_at: string
          id: string
          name: string
          price: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          price: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          price?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ColorTypes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      CustomerBaseGel: {
        Row: {
          created_at: string
          gel_id: string | null
          id: string
          record_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          gel_id?: string | null
          id?: string
          record_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          gel_id?: string | null
          id?: string
          record_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "CustomerBaseGel_gel_id_fkey"
            columns: ["gel_id"]
            referencedRelation: "GelTypes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CustomerBaseGel_record_id_fkey"
            columns: ["record_id"]
            referencedRelation: "CustomerRecordInformation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CustomerBaseGel_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      CustomerColor: {
        Row: {
          color_id: string | null
          created_at: string | null
          id: string
          record_id: string | null
          user_id: string | null
        }
        Insert: {
          color_id?: string | null
          created_at?: string | null
          id?: string
          record_id?: string | null
          user_id?: string | null
        }
        Update: {
          color_id?: string | null
          created_at?: string | null
          id?: string
          record_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "CustomerColor_color_id_fkey"
            columns: ["color_id"]
            referencedRelation: "ColorTypes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CustomerColor_record_id_fkey"
            columns: ["record_id"]
            referencedRelation: "CustomerRecordInformation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CustomerColor_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      CustomerList: {
        Row: {
          address: string | null
          birthday: string | null
          created_at: string | null
          customer_id: number | null
          id: string
          memo: string | null
          name: string
          phone_number: string | null
          user_id: string | null
        }
        Insert: {
          address?: string | null
          birthday?: string | null
          created_at?: string | null
          customer_id?: number | null
          id?: string
          memo?: string | null
          name: string
          phone_number?: string | null
          user_id?: string | null
        }
        Update: {
          address?: string | null
          birthday?: string | null
          created_at?: string | null
          customer_id?: number | null
          id?: string
          memo?: string | null
          name?: string
          phone_number?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "CustomerList_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      CustomerRecordInformation: {
        Row: {
          conversation_content: string | null
          created_at: string | null
          customer_id: string | null
          cycle: number
          design_fee: number
          desired_design: string | null
          elapsed_time: number
          fill: number
          id: string
          others: string | null
          previous_condition: string | null
          primer: boolean
          target: string | null
          total_fee: number
          treatment_content: string | null
          used_coupon: boolean
          user_id: string | null
          visit_date: string
        }
        Insert: {
          conversation_content?: string | null
          created_at?: string | null
          customer_id?: string | null
          cycle: number
          design_fee: number
          desired_design?: string | null
          elapsed_time: number
          fill: number
          id?: string
          others?: string | null
          previous_condition?: string | null
          primer: boolean
          target?: string | null
          total_fee: number
          treatment_content?: string | null
          used_coupon: boolean
          user_id?: string | null
          visit_date: string
        }
        Update: {
          conversation_content?: string | null
          created_at?: string | null
          customer_id?: string | null
          cycle?: number
          design_fee?: number
          desired_design?: string | null
          elapsed_time?: number
          fill?: number
          id?: string
          others?: string | null
          previous_condition?: string | null
          primer?: boolean
          target?: string | null
          total_fee?: number
          treatment_content?: string | null
          used_coupon?: boolean
          user_id?: string | null
          visit_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "CustomerRecordInformation_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      CustomerTopGel: {
        Row: {
          created_at: string | null
          gel_id: string | null
          id: string
          record_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          gel_id?: string | null
          id?: string
          record_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          gel_id?: string | null
          id?: string
          record_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "CustomerTopGel_gel_id_fkey"
            columns: ["gel_id"]
            referencedRelation: "GelTypes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CustomerTopGel_record_id_fkey"
            columns: ["record_id"]
            referencedRelation: "CustomerRecordInformation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CustomerTopGel_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      FingerInformation: {
        Row: {
          created_at: string | null
          finger_name: string
          id: string
          nail_type: string | null
          record_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          finger_name: string
          id?: string
          nail_type?: string | null
          record_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          finger_name?: string
          id?: string
          nail_type?: string | null
          record_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "FingerInformation_record_id_fkey"
            columns: ["record_id"]
            referencedRelation: "CustomerRecordInformation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FingerInformation_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      GelTypes: {
        Row: {
          created_at: string
          id: string
          name: string
          price: number
          target: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          price: number
          target: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          price?: number
          target?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "GelTypes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Merchandise: {
        Row: {
          created_at: string | null
          id: string
          name: string
          price: number
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          price: number
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          price?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Merchandise_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      RecordMerchandise: {
        Row: {
          created_at: string | null
          id: string
          merchandise_id: string | null
          record_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          merchandise_id?: string | null
          record_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          merchandise_id?: string | null
          record_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "RecordMerchandise_merchandise_id_fkey"
            columns: ["merchandise_id"]
            referencedRelation: "Merchandise"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "RecordMerchandise_record_id_fkey"
            columns: ["record_id"]
            referencedRelation: "CustomerRecordInformation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "RecordMerchandise_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "objects_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
