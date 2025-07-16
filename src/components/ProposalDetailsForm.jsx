import React, { memo } from 'react';
import { FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProposalDetailsForm = memo(({ formData, onInputChange }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Detalhes da Proposta
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="proposalTitle">Título da Proposta</Label>
          <Input
            id="proposalTitle"
            value={formData.proposalTitle}
            onChange={(e) => onInputChange('proposalTitle', e.target.value)}
            placeholder="Ex: Proposta de Serviços de Marketing"
          />
        </div>

        <div>
          <Label htmlFor="proposalDescription">Descrição da Proposta</Label>
          <Textarea
            id="proposalDescription"
            value={formData.proposalDescription}
            onChange={(e) => onInputChange('proposalDescription', e.target.value)}
            placeholder="Descreva os serviços ou produtos oferecidos..."
            rows={4}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="validityDays">Validade (dias)</Label>
            <Input
              id="validityDays"
              type="number"
              value={formData.validityDays}
              onChange={(e) => onInputChange('validityDays', e.target.value)}
              placeholder="30"
              min="1"
            />
          </div>
          <div>
            <Label htmlFor="paymentTerms">Condições de Pagamento</Label>
            <Input
              id="paymentTerms"
              value={formData.paymentTerms}
              onChange={(e) => onInputChange('paymentTerms', e.target.value)}
              placeholder="Ex: À vista, 30 dias, parcelado"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="observations">Observações</Label>
          <Textarea
            id="observations"
            value={formData.observations}
            onChange={(e) => onInputChange('observations', e.target.value)}
            placeholder="Informações adicionais, termos e condições..."
            rows={3}
          />
        </div>
      </CardContent>
    </Card>
  );
});

ProposalDetailsForm.displayName = 'ProposalDetailsForm';

export default ProposalDetailsForm;