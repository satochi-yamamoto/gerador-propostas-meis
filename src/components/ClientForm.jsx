import React, { memo } from 'react';
import { Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ClientForm = memo(({ formData, onInputChange }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Dados do Cliente
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="clientName">Nome do Cliente *</Label>
            <Input
              id="clientName"
              value={formData.clientName}
              onChange={(e) => onInputChange('clientName', e.target.value)}
              placeholder="Ex: João Silva"
              required
            />
          </div>
          <div>
            <Label htmlFor="clientDocument">CPF/CNPJ</Label>
            <Input
              id="clientDocument"
              value={formData.clientDocument}
              onChange={(e) => onInputChange('clientDocument', e.target.value)}
              placeholder="000.000.000-00"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="clientPhone">Telefone</Label>
            <Input
              id="clientPhone"
              value={formData.clientPhone}
              onChange={(e) => onInputChange('clientPhone', e.target.value)}
              placeholder="(11) 99999-9999"
            />
          </div>
          <div>
            <Label htmlFor="clientEmail">E-mail</Label>
            <Input
              id="clientEmail"
              type="email"
              value={formData.clientEmail}
              onChange={(e) => onInputChange('clientEmail', e.target.value)}
              placeholder="cliente@email.com"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="clientAddress">Endereço</Label>
          <Textarea
            id="clientAddress"
            value={formData.clientAddress}
            onChange={(e) => onInputChange('clientAddress', e.target.value)}
            placeholder="Rua, número, bairro, cidade - CEP"
            rows={2}
          />
        </div>
      </CardContent>
    </Card>
  );
});

ClientForm.displayName = 'ClientForm';

export default ClientForm;