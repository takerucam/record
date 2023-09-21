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
          color_id: number
          created_at: string
          name: string
          price: number
        }
        Insert: {
          color_id?: number
          created_at?: string
          name: string
          price: number
        }
        Update: {
          color_id?: number
          created_at?: string
          name?: string
          price?: number
        }
        Relationships: []
      }
      CustomerBaseGel: {
        Row: {
          base_gel_id: number | null
          created_at: string | null
          id: number
          record_id: number | null
        }
        Insert: {
          base_gel_id?: number | null
          created_at?: string | null
          id?: number
          record_id?: number | null
        }
        Update: {
          base_gel_id?: number | null
          created_at?: string | null
          id?: number
          record_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "CustomerBaseGel_base_gel_id_fkey"
            columns: ["base_gel_id"]
            referencedRelation: "GelTypes"
            referencedColumns: ["gel_id"]
          },
          {
            foreignKeyName: "CustomerBaseGel_record_id_fkey"
            columns: ["record_id"]
            referencedRelation: "CustomerRecordInformation"
            referencedColumns: ["id"]
          }
        ]
      }
      CustomerColor: {
        Row: {
          color_id: number | null
          created_at: string | null
          id: number
          record_id: number | null
        }
        Insert: {
          color_id?: number | null
          created_at?: string | null
          id?: number
          record_id?: number | null
        }
        Update: {
          color_id?: number | null
          created_at?: string | null
          id?: number
          record_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "CustomerColor_color_id_fkey"
            columns: ["color_id"]
            referencedRelation: "ColorTypes"
            referencedColumns: ["color_id"]
          },
          {
            foreignKeyName: "CustomerColor_record_id_fkey"
            columns: ["record_id"]
            referencedRelation: "CustomerRecordInformation"
            referencedColumns: ["id"]
          }
        ]
      }
      CustomerList: {
        Row: {
          address: string | null
          birthday: string | null
          created_at: string | null
          customer_id: number
          memo: string | null
          name: string | null
          number: number | null
        }
        Insert: {
          address?: string | null
          birthday?: string | null
          created_at?: string | null
          customer_id?: number
          memo?: string | null
          name?: string | null
          number?: number | null
        }
        Update: {
          address?: string | null
          birthday?: string | null
          created_at?: string | null
          customer_id?: number
          memo?: string | null
          name?: string | null
          number?: number | null
        }
        Relationships: []
      }
      CustomerRecordInformation: {
        Row: {
          conversation_content: string | null
          created_at: string | null
          customer_id: number | null
          cycle: number
          design_fee: number
          desired_design: string | null
          elapsed_time: number
          fill: number
          id: number
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
          customer_id?: number | null
          cycle: number
          design_fee: number
          desired_design?: string | null
          elapsed_time: number
          fill: number
          id: number
          others?: string | null
          previous_condition?: string | null
          primer: boolean
          target?: string | null
          total_fee: number
          treatment_content?: string | null
          used_coupon: boolean
          user_id?: string | null
          visit_date?: string
        }
        Update: {
          conversation_content?: string | null
          created_at?: string | null
          customer_id?: number | null
          cycle?: number
          design_fee?: number
          desired_design?: string | null
          elapsed_time?: number
          fill?: number
          id?: number
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
          id: number
          record_id: number | null
          top_gel_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          record_id?: number | null
          top_gel_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          record_id?: number | null
          top_gel_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "CustomerTopGel_top_gel_id_fkey"
            columns: ["top_gel_id"]
            referencedRelation: "GelTypes"
            referencedColumns: ["gel_id"]
          }
        ]
      }
      FingerInformation: {
        Row: {
          created_at: string | null
          finger_name: string | null
          id: number
          nail_type: string | null
          record_id: number | null
        }
        Insert: {
          created_at?: string | null
          finger_name?: string | null
          id?: number
          nail_type?: string | null
          record_id?: number | null
        }
        Update: {
          created_at?: string | null
          finger_name?: string | null
          id?: number
          nail_type?: string | null
          record_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "FingerInformation_record_id_fkey"
            columns: ["record_id"]
            referencedRelation: "CustomerRecordInformation"
            referencedColumns: ["id"]
          }
        ]
      }
      GelTypes: {
        Row: {
          created_at: string | null
          gel_id: number
          name: string | null
          price: number | null
          target: string
        }
        Insert: {
          created_at?: string | null
          gel_id?: number
          name?: string | null
          price?: number | null
          target: string
        }
        Update: {
          created_at?: string | null
          gel_id?: number
          name?: string | null
          price?: number | null
          target?: string
        }
        Relationships: []
      }
      Merchandise: {
        Row: {
          created_at: string | null
          merchandise_id: number
          name: string | null
          price: number | null
        }
        Insert: {
          created_at?: string | null
          merchandise_id?: number
          name?: string | null
          price?: number | null
        }
        Update: {
          created_at?: string | null
          merchandise_id?: number
          name?: string | null
          price?: number | null
        }
        Relationships: []
      }
      RecordMerchandise: {
        Row: {
          created_at: string | null
          id: number
          merchandise_id: number | null
          record_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          merchandise_id?: number | null
          record_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          merchandise_id?: number | null
          record_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "RecordMerchandise_merchandise_id_fkey"
            columns: ["merchandise_id"]
            referencedRelation: "Merchandise"
            referencedColumns: ["merchandise_id"]
          },
          {
            foreignKeyName: "RecordMerchandise_record_id_fkey"
            columns: ["record_id"]
            referencedRelation: "CustomerRecordInformation"
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
